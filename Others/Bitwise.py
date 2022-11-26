from math import pow

def exp_count(num):
    n, exp = 0, 0
    while(num > n):
        n = pow(2, exp)
        exp += 1
    exp -= 2
    return exp

def dec_to_bin(num):
    container = []
    for _ in range(exp_count(num), 0, -1):
        if  (num > pow(2, _) or num == pow(2, _)):
            # str_a = (f"{num}-{pow(2, _)}")
            num -= pow(2, _)
            # print(str_a + " = " + str(num))
            container.append(1)
        else:
            container.append(0)
    if (num == 1):
        container.append(1)
    elif (num == 0):
        container.append(0)

    """
    # Dev Version
    # result = ' '.join(map(str, container))
    # result = listToStr.replace(" ","")
    # return result
    """

    # Final Version
    return (' '.join(map(str, container))).replace(" ","")

while True:
    numTest = input("Zadej cislo:" )
    print(dec_to_bin(int(numTest)))