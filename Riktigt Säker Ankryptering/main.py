from Crypto.Util.number import getPrime, bytes_to_long

p = getPrime(28)
q = getPrime(512)
e = 0x10001

n = p * q

flag = b"210S{???????}"

m = bytes_to_long(flag)
c = pow(m, e, n) # RSA encryption

print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")
