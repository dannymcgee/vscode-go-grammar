func main() {}
func main(x int) int {}
func main(a, b int, z float32) bool {}
func main(foo string, bar int, baz ...*lorem.ipsum) {}
func main(foo string, bar int, baz ...*lorem.ipsum) (x bool, err error) {}

type LoremIpsum struct {
	foo    string
	bar    int // foo bar baz
	baz    lorem.Ipsum
	foobar bool
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
