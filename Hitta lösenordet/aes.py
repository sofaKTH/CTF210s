from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

ciphertext = b''
key = b''

cipher = AES.new(key, AES.MODE_ECB)

plaintext_bytes = cipher.decrypt(ciphertext)

plaintext = unpad(plaintext_bytes, AES.block_size)

plaintext_string = plaintext.decode('utf-8')

print(plaintext_string)