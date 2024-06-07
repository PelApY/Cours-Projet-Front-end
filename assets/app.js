// import { Octokit } from "https://esm.sh/octokit"

// const octokit = new Octokit({})
// // octokit.rest.repos => provient du SDK
// // get => Méthode du SDK pour récupérer ici les repos
// octokit.rest.repos
//     .get({
//         owner:"PelApY",
//         repo:"Cours-Projet-Front-end",
//     })
//     .then(({ data }) => {
//         console.log("Repo récupéré", data)
//         console.log(data.url)
//     })

import { Home } from "./modules/Home.js"

new Home()