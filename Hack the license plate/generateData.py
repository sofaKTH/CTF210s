import random
import speedCamera

# Generera random registreringsskylt (3 bokstäver + 3 siffror, inte nya systemet)
def getRandomLicensePlate(pos = 0):
    if pos == 6: return "" 
    if pos > 2: return chr(random.randint(0, 9)+ord('0'))+getRandomLicensePlate(pos+1)
    return chr(random.randint(0, 25)+ord('A'))+getRandomLicensePlate(pos+1)

# Lägger till den bil som kör för fort
FLAG = "210s{"+getRandomLicensePlate()+"}"
saved = [(FLAG[5:-1], True)]
print(FLAG)

# Lägger till 1.000.000 bilar som vid den gången inte körde för fort
for i in range(1000000):
    saved.append((getRandomLicensePlate(), False))

random.shuffle(saved)

# Skickar denna data till hastighets kameran
for i in range(len(saved)):
    speedCamera.addLicenseData(saved[i][0], saved[i][1])
speedCamera.saveData()