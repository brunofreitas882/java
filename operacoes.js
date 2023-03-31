{
    let avaliacao01 = 9.871;
    let avaliacao02 = 6.871;
    const peso1 = 1.0;
    const peso2 = Number ('2.0');
    //CALCULO DA MÉDIA PONDERADA
    const total = avaliacao01 * peso1 + avaliacao02 * peso2;
    const media = total / (peso1 + peso2);

    console.log(media.toFixed(5))
}