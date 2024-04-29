Secret_key = "9ZCCQlObPs2DYnm5" # secret key  

#Encryption generator 3000: To prevent secret key leak
def key_encryption(input_string):
    def rotate_char(c):
        if 'a' <= c <= 'z':  
            return chr((ord(c) - ord('a') + 13) % 26 + ord('a'))
        elif 'A' <= c <= 'Z':  
            return chr((ord(c) - ord('A') + 13) % 26 + ord('A'))
        else:
            return c  

    return ''.join(rotate_char(c) for c in input_string)

