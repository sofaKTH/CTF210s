from datetime import datetime
import random

# Skapar hash givet sträng och p
def hash(data: str, p: int):
    m = int(1e9 + 7)
    hashed_value = 0
    for char in data:
        hashed_value = (hashed_value * p + ord(char)) % m
    return hashed_value

# Skapar 3 hash från olika p
def getHashes(data: str):
    P = [42, 1337, ord('E')]
    return [hash(data, p+random.randint(1, 100)) for p in P]

dataToSend = []

# Lägg till en registreringsskylt
def addLicenseData(licensePlate: str, isTooFast: bool):
    currentDate = datetime.now().date().toordinal()
    
    random.seed(currentDate)
    dataToSend.append(getHashes(str(licensePlate) + " " + str(isTooFast)))

# Sparar datan i en txt fil
def saveData():
    current_date = datetime.now().date()
    date_string = current_date.strftime("%Y-%m-%d")

    with open(f"{date_string}.txt", "a") as f:
        for data in dataToSend:
            dataStr = ' '.join(map(str, data))
            f.write(dataStr + '\n')
        dataToSend.clear()

