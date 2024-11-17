def reverse_words(str):
    str_split = str.split(' ')
    reverse_str = str_split[::-1]
    return (' ').join(reverse_str)

print(reverse_words('Hello world!'))