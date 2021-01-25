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
go func(ch chan <- bool) { for { sleep(10); ch <- true }} (c)

// Select statement
var a []int
var c, c1, c2, c3, c4 chan int
var i1, i2 int
select {
case i1 = <-c1:
	print("received ", i1, " from c1\n")
case c2 <- i2:
	print("sent ", i2, " to c2\n")
case i3, ok := (<-c3):  // same as: i3, ok := <-c3
	if ok {
		print("received ", i3, " from c3\n")
	} else {
		print("c3 is closed\n")
	}
case a[f()] = <-c4:
	// same as:
	// case t := <-c4
	//	a[f()] = t
default:
	print("no communication\n")
}

for {  // send random sequence of bits to c
	select {
	case c <- 0:  // note: no statement, no fallthrough, no folding of cases
	case c <- 1:
	}
}

select {}  // block forever
