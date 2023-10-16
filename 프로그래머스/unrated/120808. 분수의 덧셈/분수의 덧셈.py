def gcd(a, b):
    if a % b == 0:
        return b
    return gcd(b, a % b)

def solution(numer1, denom1, numer2, denom2):
    denom = denom1 * denom2
    numer = denom1 * numer2 + denom2 * numer1
    
    get_gcd = gcd(denom, numer)
    
    answer = [numer // get_gcd, denom // get_gcd]
    return answer