const formulario  = document.getElementById("formulario")
const empezar = document.getElementById("empezar")
const r = document.querySelector('p')

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    const n = binary_gap(parseInt(e.target[0].value))
    //console.log(binary_gap(parseInt(e.target[0].value)))
    r.innerHTML = "resultado: "+ n
})

function binary_gap(n) {
    let r = 0;
    let t = 0;
    let S = n.toString(2);
    
    for (let i in S) {
      let s = S[i];
      if (s == 1) {
        if (t > r) {
          r = t;
        }
        t = 0;
      } else {
        t++;
      }
    }
    return r;
  }

