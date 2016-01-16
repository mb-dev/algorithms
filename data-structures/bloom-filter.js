// https://en.wikipedia.org/wiki/Bloom_filter
// For hashing use murmur
// Calculate probability: http://hur.st/bloomfilter?n=1000000000&p=0.1
// See: http://billmill.org/bloomfilter-tutorial/
// 1) Choose a ballpark value for n
// 2) Choose a value for m
// 3) Calculate the optimal value of k (m/n)ln(2)
// 4) Calculate the error rate for our chosen values of n, m, and k ((1-e-kn/m)k). If it's unacceptable, return to step 2 and change m; otherwise we're done.
