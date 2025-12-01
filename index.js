let cadastro = document.getElementById("cadastro")
  let lista = document.getElementById("lista")
  let favoritos = document.getElementById("favoritos")
  let listaProdutos = document.getElementById("listaProdutos");
  let listaFavoritos = document.getElementById("listaFavoritos");
  let home = document.getElementById("home");

  let produtos=[
  {
    categoria:"Kits", 
    descricao:"Kit infantil", 
    preco:"R$ 59,90", 
    img:"img/3.png"
},
  {
    categoria:"Kits", 
    descricao:"Kit colorido", 
    preco:"R$ 79,90", 
    img:"img/4.png"},
  {
    categoria:"Kits", 
    descricao:"Kit classic", 
    preco:"R$ 59,90", 
    img:"img/5.png"},
  {
    categoria:"Biscoitos", 
    descricao:"Cookie de chocolate", 
    preco:"R$ 9,90/Unid.", 
    img:"img/7.png"},
  {
    categoria:"Biscoitos", 
    descricao:"Biscoito de gengibre", 
    preco:"R$ 12,90/Unid.", 
    img:"img/8.png"},
  {
    categoria:"Biscoitos", 
    descricao:"Biscoito recheado de framboesa", 
    preco:"R$ 3,90/Unid.", 
    img:"img/9.png"},
  {
    categoria:"Bolos", 
    descricao:"Bolo chocolate branco", 
    preco:"R$ 89,90", 
    img:"img/11.png"},
  {
    categoria:"Bolos", 
    descricao:"Bolo chocolate preto c/ chantilly", 
    preco:"R$ 89,90", 
    img:"img/12.png"},
  {
    categoria:"Bolos", 
    descricao:"Bolo cereja c/ chocolate branco", 
    preco:"R$ 69,90", 
    img:"img/13.png"},
  {
    categoria:"Bebidas", 
    descricao:"Milkshake de morango", 
    preco:"R$ 29,90", 
    img:"img/15.png"},
  {
    categoria:"Bebidas", 
    descricao:"Coquetel natalino - Margarita", 
    preco:"R$ 39,90", 
    img:"img/16.png"},
  {
    categoria:"Bebidas", 
    descricao:"Chocolate quente", 
    preco:"R$ 19,90", 
    img:"img/17.png"
}
  ]

  let favoritosList = JSON.parse(localStorage.getItem("favoritos"))||[]

  function salvarFav(){
    localStorage.setItem("favoritos", JSON.stringify(favoritosList))
  }

  function esconder(){
    cadastro.classList.add("hidden")
    lista.classList.add("hidden")
    favoritos.classList.add("hidden")
    home.classList.add("hidden");
  }

  function mostrarCadastro(){ 
    esconder(); 
    cadastro.classList.remove("hidden") 
}

  function mostrarLista(){ 
    esconder(); lista.classList.remove("hidden"); 
    listarProdutos() 
}
  function mostrarFavoritos(){ 
    esconder(); favoritos.classList.remove("hidden"); 
    listarFavoritos() 
}

  function addProduto(e){
    e.preventDefault()
    let d = descProd.value
    let p = precoProd.value
    produtos.push({categoria:"Cadastro", descricao:d, preco:p, img:"img/semfundo.png"})
    mostrarLista()
  }

  function listarProdutos(){
    listaProdutos.innerHTML = ""
    let cat = ""
    produtos.forEach((p,i)=>{
      if(p.categoria !== cat){
        cat = p.categoria
        let t = document.createElement("div")
        t.className = "tituloCat"
        t.innerText = cat
        listaProdutos.appendChild(t)
      }
      let c = document.createElement("div")
      c.className = "card"
      c.innerHTML = `
      <img src="${p.img}">
      <h3>${p.descricao}</h3>
      <p>${p.preco}</p>
      <button onclick="favoritar(${i})">Favoritar</button>`
      listaProdutos.appendChild(c)
    })
  }

  function favoritar(i){
    favoritosList.push(produtos[i])
    salvarFav()
  }

  function listarFavoritos(){
    listaFavoritos.innerHTML = ""
    favoritosList.forEach((p,i)=>{
      let c = document.createElement("div")
      c.className = "card"
      c.innerHTML = `
      <img src="${p.img}">
      <h3>${p.descricao}</h3>
      <p>${p.preco}</p>
      <button onclick="removeFav(${i})">Remover</button>`
      listaFavoritos.appendChild(c)
    })
  }

  function removeFav(i){
    favoritosList.splice(i,1)
    salvarFav()
    listarFavoritos()
  }

  home.classList.remove("hidden")