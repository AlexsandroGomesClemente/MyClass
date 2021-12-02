int main () {
    int i, divisores, valor = 9;
    do {
        divisores = 0;
        valor++;
    for (i = 1; i <= 10; i++){
        if(valor % i == 0)
            divisores++;
    }
    }while(divisores != 10);

    printf(valor);
}