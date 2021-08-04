using Escola.WebAPI.Contexts;
using Escola.WebAPI.Domains;
using Escola.WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.WebAPI.Repositories
{
    public class TipoEquipamentoRepository : ITipoEquipamentoRepository
    {
        Escola_Context ctx = new Escola_Context();
        public void Atualizar(int id, TipoEquipamento novoTipoEquipamento)
        {
            TipoEquipamento tipoEquipamentoBuscado = ctx.TipoEquipamentos.Find(id);

            if (tipoEquipamentoBuscado.TipoEquip != null)
            {
                tipoEquipamentoBuscado.TipoEquip = novoTipoEquipamento.TipoEquip;
            }

            ctx.TipoEquipamentos.Update(tipoEquipamentoBuscado);
            ctx.SaveChanges();
        }

        public void Cadastro(TipoEquipamento novoTipoEquipamento)
        {
            ctx.TipoEquipamentos.Add(novoTipoEquipamento);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            TipoEquipamento tipoEquipamentoBuscado = ctx.TipoEquipamentos.Find(id);
            ctx.TipoEquipamentos.Remove(tipoEquipamentoBuscado);
            ctx.SaveChanges();

        }

        public List<TipoEquipamento> Listar()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
