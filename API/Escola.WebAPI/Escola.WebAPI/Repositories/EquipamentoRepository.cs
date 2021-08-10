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
    public class EquipamentoRepository : IEquipamentoRepository
    {
        Escola_Context ctx = new Escola_Context();

        public void Atualizar(int id, Equipamento novoEquipamento)
        {
            Equipamento equipamentoBuscado = ctx.Equipamentos.Find(id);

            if (equipamentoBuscado.Descricao != null)
            {
                equipamentoBuscado.Descricao = novoEquipamento.Descricao;
                equipamentoBuscado.Marca = novoEquipamento.Marca;
                equipamentoBuscado.StatusEquipa = novoEquipamento.StatusEquipa;
            }


            ctx.Equipamentos.Update(equipamentoBuscado);
            ctx.SaveChanges();
        }

        public void Cadastro(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Equipamento equipamentoBuscado = ctx.Equipamentos.Find(id);
            ctx.Equipamentos.Remove(equipamentoBuscado);
            ctx.SaveChanges();
        }


        public List<Equipamento> ListarTudo()
        {
            return ctx.Equipamentos
                .Include(e => e.IdTipoEquipNavigation)
                .ToList();
        }

        public void Situacao(bool id, string status)
        {
            Equipamento equipamento = ctx.Equipamentos
                .FirstOrDefault(i => i.StatusEquipa == id);

            if (status != "1")
            {
                equipamento.StatusEquipa.ToString();
            }
            else
            {
                equipamento.StatusEquipa.ToString();
            }
        }
    }
}
