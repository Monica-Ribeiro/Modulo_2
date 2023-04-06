var salarioLarissa = 2000
var salarioMaria = 5000
var salarioJonas = 1000
var salarioFrancisco = 3000
var reajuste = 10 
var Reajuste1 = salarioLarissa * reajuste / 100
var Reajuste2 = salarioMaria * reajuste / 100
var Reajuste3 = salarioJonas * reajuste / 100
var Reajuste4 = salarioFrancisco * reajuste / 100 
var salarioFinal1 = salarioLarissa + Reajuste1
var salarioFinal2 = salarioMaria + Reajuste2
var salarioFinal3 = salarioJonas + Reajuste3
var salarioFinal4 = salarioFrancisco + Reajuste4

console.log("O salário de Larissa: ", salarioLarissa, "com o reajuste de", reajuste, "% passará a ganhar", "R$", salarioFinal1)
console.log("O salário de Maria: ", salarioMaria, "com o reajuste de", reajuste, "% passará a ganhar", "R$", salarioFinal2)
console.log("O salário de Jonas: ", salarioJonas, "com o reajuste de", reajuste, "% passará a ganhar", "R$", salarioFinal3)
console.log("O salário de Francisco: ", salarioFrancisco, "com o reajuste de", reajuste, "% passará a ganhar", "R$", salarioFinal4)