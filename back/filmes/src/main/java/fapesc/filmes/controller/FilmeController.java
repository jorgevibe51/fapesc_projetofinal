package fapesc.filmes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fapesc.filmes.entity.Filme;
import fapesc.filmes.service.FilmeService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/filmes")
public class FilmeController {

    @Autowired
    private FilmeService service;

    @GetMapping("/listar")
    public ResponseEntity<List<Filme>> listarFilmes(){
        return ResponseEntity.ok().body(service.listarFilmes());
    }

    @GetMapping("/titulo/{palavraChave}")
    public ResponseEntity<List<Filme>> buscarFilmes(@PathVariable String palavra){
        return ResponseEntity.ok().body(service.buscarTituloContendo(palavra));
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Filme> inserirFilme(@RequestBody Filme filme){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.inserirFilme(filme));
    }

    @PutMapping("/editar")
    public ResponseEntity<Filme> editarFilme(@RequestBody Filme filme){
        return ResponseEntity.ok().body(service.editarFilme(filme));
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> excluirFilme(@PathVariable Long id){
        service.excluirFilme(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
