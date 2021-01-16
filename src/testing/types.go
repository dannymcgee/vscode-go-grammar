var x uint8
var x uint16
var x uint32
var x uint64

var x int8
var x int16
var x int32
var x int64

var x float32
var x float64

var x complex64
var x complex128

var x byte
var x rune

var x uint
var x int
var x uintptr

var arr [32]byte
var arr [1000]*float64
var arr [3][5]int
var arr [2][2][2]float64
var arr [2]([2]([2]float64))

make([]int, 50, 100)
new([100]int)[0:50]

var s [2*N] struct { x, y int32 }

struct {}

struct {
	x, y int
	u float32
	_ float32
	A *[]int
	F func()
}

struct {
	x, y float64 ""  // an empty tag string is like an absent tag
	name string  "any string is permitted as a tag"
	_    [4]byte "ceci n'est pas un champ de structure"
}

struct {
	microsec  uint64 `protobuf:"1"`
	serverIP6 uint64 `protobuf:"2"`
}

var foo *Point
var foo *[4]int

var f func()
var f func(x int) int
var f func(a, _ int, z float32) bool
var f func(a, b int, z float32) (bool)
var f func(prefix string, values ...int)
var f func(a, b int, z float64, opt ...interface{}) (success bool)
var f func(int, int, float64) (float64, *[]int)
var f func(n int) func(p *T)

interface {
	Read([]byte) (int, error)
	Write([]byte) (int, error)
	Close() error
}

type Locker interface {
	Lock()
	Unlock()
}

type Reader interface {
	Read(p []byte) (n int, err error)
	Close() error
}

type Writer interface {
	Write(p []byte) (n int, err error)
	Close() error
}

// ReadWriter's methods are Read, Write, and Close.
type ReadWriter interface {
	Reader  // includes methods of Reader in ReadWriter's method set
	Writer  // includes methods of Writer in ReadWriter's method set
}

var m map[string]int
var m map[*T]struct{ x, y float64 }
var m map[string]interface{}

make(map[string]int)
make(map[string]int, 100)

var ch chan T          // can be used to send and receive values of type T
var ch chan<- float64  // can only be used to send float64s
var ch <-chan int      // can only be used to receive ints

type (
	A0 = []string
	A1 = A0
	A2 = struct{ a, b int }
	A3 = int
	A4 = func(A3, float64) *A0
	A5 = func(x int, _ float64) *[]string
)

type (
	B0 A0
	B1 []string
	B2 struct{ a, b int }
	B3 struct{ a, c int }
	B4 func(int, float64) *B0
	B5 func(x int, y float64) *A1
)

type C0 = B0
