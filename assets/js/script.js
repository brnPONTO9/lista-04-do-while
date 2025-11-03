// Utilitários
function val(id){const e=document.getElementById(id); return e.value.trim();}
function num(id){const v=val(id); if(v==="") return null; return Number(v);}
function out(id,msg){document.getElementById(id).textContent = msg;}

// 1) 1..20
function e1(){ let i=1, s=[]; do{ s.push(i); i++; }while(i<=20); out("o1", s.join(" ")); }
// 2) pares 1..50
function e2(){ let i=1, s=[]; do{ if(i%2===0) s.push(i); i++; }while(i<=50); out("o2", s.join(" ")); }
// 3) tabuada 1..10
function e3(){ const n=num("e3n"); if(n===null) return out("o3","Informe um número."); let i=1, ss=[]; do{ ss.push(`${n} x ${i} = ${n*i}`); i++; }while(i<=10); out("o3", ss.join('\n')); }
// 4) soma 1..100
function e4(){ let i=1, soma=0; do{ soma+=i; i++; }while(i<=100); out("o4", `Soma = ${soma}`); }
// 5) soma pares 1..200
function e5(){ let i=1, soma=0; do{ if(i%2===0) soma+=i; i++; }while(i<=200); out("o5", `Soma dos pares = ${soma}`); }

// 6) maior e menor de 10 inteiros
function e6(){
  const ids=["e6a","e6b","e6c","e6d","e6e","e6f","e6g","e6h","e6i","e6j"];
  let idx=0, menor=Infinity, maior=-Infinity;
  do{
    const v=num(ids[idx]); if(v===null) return out("o6","Preencha todos os 10 valores.");
    if(v<menor) menor=v; if(v>maior) maior=v; idx++;
  }while(idx<ids.length);
  out("o6", `Maior = ${maior} • Menor = ${menor}`);
}

// 7) média de 5 inteiros
function e7(){
  const ids=["e7a","e7b","e7c","e7d","e7e"];
  let idx=0, soma=0;
  do{ const v=num(ids[idx]); if(v===null) return out("o7","Preencha os 5 valores."); soma+=v; idx++; }while(idx<ids.length);
  out("o7", `Média = ${(soma/ids.length).toFixed(2)}`);
}

// 8) fibonacci 10 termos
function e8(){ let a=0,b=1,count=0,s=[]; do{ s.push(a); const nx=a+b; a=b; b=nx; count++; }while(count<10); out("o8", s.join(" ")); }

// 9) 1..N
function e9(){ const N=num("e9n"); if(N===null||N<1) return out("o9","Informe N ≥ 1."); let i=1,s=[]; do{ s.push(i); i++; }while(i<=N); out("o9", s.join(" ")); }

// 10) ímpares 100..200
function e10(){ let i=100,s=[]; do{ if(i%2!==0)s.push(i); i++; }while(i<=200); out("o10", s.join(" ")); }

// 11) maiores de idade (10 idades)
function e11(){
  const ids=["e11a","e11b","e11c","e11d","e11e","e11f","e11g","e11h","e11i","e11j"];
  let idx=0, qtd=0;
  do{ const idade=num(ids[idx]); if(idade===null||idade<0) return out("o11","Preencha 10 idades válidas."); if(idade>=18) qtd++; idx++; }while(idx<ids.length);
  out("o11", `Maiores de idade: ${qtd} de ${ids.length}`);
}

// 12) fatorial
function e12(){ const n=num("e12n"); if(n===null||n<0) return out("o12","Informe inteiro ≥ 0."); let i=1,fat=1; do{ fat*=i; i++; }while(i<=n); out("o12", `${n}! = ${fat}`); }

// 13) soma múltiplos de 3 até N
function e13(){ const N=num("e13n"); if(N===null||N<0) return out("o13","Informe N ≥ 0."); let i=0,soma=0; do{ if(i%3===0) soma+=i; i++; }while(i<=N); out("o13", `Soma = ${soma}`); }

// 14) 5 nomes invertidos
function e14(){
  const ids=["e14a","e14b","e14c","e14d","e14e"]; let idx=0, arr=[];
  do{ const nome=val(ids[idx]); if(!nome) return out("o14","Preencha os 5 nomes."); arr.push(nome); idx++; }while(idx<ids.length);
  let j=arr.length-1, outArr=[]; do{ outArr.push(arr[j]); j--; }while(j>=0);
  out("o14", outArr.join(" | "));
}

// 15) triângulo
function e15(){
  const N=num("e15n"); if(N===null||N<1) return out("o15","Informe N ≥ 1.");
  let i=1, linhas=[];
  do{
    let k=0, ln=""; do{ ln+="*"; k++; }while(k<i);
    linhas.push(ln); i++;
  }while(i<=N);
  out("o15", linhas.join("\\n"));
}
