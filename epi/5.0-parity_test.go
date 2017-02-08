package epi

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

// Write a function to calculate the parity
// returns 1 if odd number of bits
// return 0 if even number of bits
func parity(n uint64) int {
	count := 0
	for i := 0; i < 64; i++ {
		if (n & (1 << uint64(i))) > 0 {
			count++
		}
	}
	if count%2 == 0 {
		return 0
	}
	return 1
}

func TestGoParity(t *testing.T) {
	assert.Equal(t, 0, parity(3))
	assert.Equal(t, 1, parity(1))
}
