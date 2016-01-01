# tail recursive fib, with the help of http://stackoverflow.com/questions/22111252/tail-recursion-fibonacci
def perfFib(a, b, n):
    if n == 1:
        return a
    else:
        return perfFib(b, a+b, n-1)

def fib(n):
    return perfFib(1, 2, n)

# solution

a, b, sum = 1, 2, 0
while a < 4000000:
    a,b = b, a+b
    if a % 2 == 0:
        sum += a

print(sum)
