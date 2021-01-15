import "foo"

if x > max {
	x = max
}

if x := f(); x < y {
	return x
} else if x > z {
	return z
} else {
	return y
}

switch tag {
default: s3()
case 0, 1, 2, 3: s1()
case 4, 5, 6, 7: s2()
}

switch x := f(); {
case x < 0: return -x
default: return x
}

switch {
case x < y: f1()
case x < z: f2()
case x == 4: f3()
}

for a < b {
	a *= 2
}

for i := 0; i < 10; i++ {}

for i, _ := range testdata.a {}

var a [10]string
for i, s := range a {}

var key string
var val interface{}

m := map[string]int{"foo":0}
for key, val = range m {
	h(key, val)
}

var ch chan Work = producer()
for w := range ch {
	doWork(w)
}

// empty a channel
for range ch {}

go Server()
go func(ch chan<- bool) { for { sleep(10); ch <- true }} (c)
