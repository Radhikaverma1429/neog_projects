
  
# a=input("Enter any word :- ")
# shift=int(input("Please enter your key :-"))
# alp="abcdefghijklmnopqrstuvwxyz"
# ctext="  "
# new=0
# for i in a:
# 	if i.lower() or i.upper() in a:
# 		new=alp.index(i) + shift
# 		ctext+=alp[new%26]
# 	else:
# 		ctext+=i
# print("The ciphertext is :- " + ctext)

# a=10
# c=a
# print(c)
# b=True
# while a>=b:
#     a=a-b
#     print(c-a)

# a=1
# while True :
#     print(a)
#     a+=1
#     if a>100:
#         break

a=int(input("enter ur number"))
c=a
# print(c)
b=True
while a>=b:
    a=a-b
    d=c-a
    # print(d)
    if d%7==0:
        print(d)