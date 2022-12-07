package fapesc.filmes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fapesc.filmes.entity.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Long>{
    List<Filme> findByTituloContainingIgnoreCase(String titulo);
}
