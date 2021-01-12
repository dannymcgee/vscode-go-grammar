func lorem() {}
func lorem(x int) int {}
func lorem(a, b int, z float32) bool {}
func lorem(a, b string) (string, error) {}
func lorem(foo string, bar int, baz ...*lorem.ipsum) {}
func lorem(foo string, bar int, baz ...*lorem.ipsum) (x bool, err error) {}

type LoremIpsum struct {
	foo        string
	bar        int // foo bar baz
	baz        lorem.Ipsum
	foobar     bool
	dolor, sit []Amet
}

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
