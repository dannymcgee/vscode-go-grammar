func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}

func (p *Point) Length() float64 {
	return math.Sqrt(p.x * p.x + p.y * p.y)
}

func (p *Point) Scale(factor float64) {
	p.x *= factor
	p.y *= factor
}

func(a, b int, z float64) bool { return a*b < int(z) }

// FIXME: f should be entity.name.function
f := func(x, y int) int { return x + y }

// FIXME: chan should be keyword (I think?)
func(ch chan int) { ch <- ACK }(replyChan)

// FIXME: rule is expecting a block, so not terminating correctly
func flushICache(begin, end uintptr) // implemented externally
