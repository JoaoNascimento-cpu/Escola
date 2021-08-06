using Escola.WebAPI.Contexts;
using Escola.WebAPI.Domains;
using Escola.WebAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.WebAPI.Repositories
{
    public class SalaRepository : ISalaRepository
    {
        Escola_Context ctx = new Escola_Context();

        public void Atualizar(int id, Sala novaSala)
        {
            Sala salaBuscada = ctx.Salas.Find(id);

            if (salaBuscada.Nome != null)
            {
                salaBuscada.Nome = novaSala.Nome;
                salaBuscada.Andar = novaSala.Andar;
            }

            ctx.Salas.Update(salaBuscada);
            ctx.SaveChanges();
        }

        public void Cadastro(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Sala salaBuscada = ctx.Salas.Find(id);
            ctx.Salas.Remove(salaBuscada);
            ctx.SaveChanges();
        }

        public List<Sala> Listar()
        {
            return ctx.Salas.ToList();
        }
    }
}
