package fapesc.filmes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fapesc.filmes.entity.Filme;
import fapesc.filmes.repository.FilmeRepository;

@Service
public class FilmeService {
    
    @Autowired
    private FilmeRepository repository;

    public List<Filme> listarFilmes(){
        return repository.findAll();
    }

    public List<Filme> buscarTituloContendo(String palavraChave){
        return repository.findByTituloContainingIgnoreCase(palavraChave);
    }

    public Filme inserirFilme(Filme novoFilme){
        return repository.save(novoFilme);
    }

    public Filme editarFilme(Filme filme){
        return repository.save(filme);
    }

    public Boolean excluirFilme(Long id){
        repository.deleteById(id);
        return true;
    }
}
