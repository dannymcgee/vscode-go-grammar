package foo

import (
	"foo"
	"bar"
	"baz"
	"lorem/ipsum"
)
import "foo"
import "lorem/ipsum"

func lorem() {}
func lorem(x int) int {}
func lorem(a, b int, z float32) bool {}
func lorem(a, b string) (string, error) {}
func lorem(foo string, bar int, baz ...*lorem.ipsum) Dolor {}
func lorem(foo string, bar int, baz ...*lorem.ipsum) (x bool, err error) {}

type LoremIpsum struct {
	foo        string
	bar        int // foo bar baz
	baz        lorem.Ipsum
	foobar     bool
	dolor, sit []Amet
}

func (li &LoremIpsum) Dolor(a, b int, c string) bool {}

struct {
	foo    string
	bar    int
	baz    lorem.Ipsum
	foobar bool // foo bar baz
}

type LoremIpsum interface {
	Read([]byte) (int, error)
	Write([]byte) (int, error)
	Close() error
	Lorem(string, int, ...*lorem.ipsum) (bool, error)
}

interface {
	Read([]byte) (int, error)
	Write([]byte) (int, error)
	Close() error
	Lorem(string, int, ...*lorem.ipsum) (bool, error)
}

func main() {
	var buf bytes.Buffer
	var foo, bar *lorem.ipsum
	var a, b, c, d lorem.Ipsum

	var i int
	var U, V, W float64
	var k = 0
	var x, y float32 = -1, -2

	var re, im = complexSqrt(-1)
	var _, found = entries[name]  // map lookup; only interested in "found"
	var baz = lorem.Ipsum{a: buf, b: foo, c: bar}


	foo, bar := lorem.Ipsum{
		a: buf,
		b: foo,
		c: bar,
	}
}

type X string
func (x X) String() string {
	fmt.Sprintf("%[2]d %[1]d\n", 11, 22)

	return Sprintf("<%s>", x)
}
