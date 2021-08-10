using Escola.WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.WebAPI.Interfaces
{
    interface ITipoEquipamentoRepository
    {
        /// <summary>
        /// Método utilizado para listar os tipos de equipamentos
        /// </summary>
        /// <returns>Lista de tipos de equipamentos</returns>
        List<TipoEquipamento> Listar();

        /// <summary>
        /// método utilizado para o cadastro de 
        /// </summary>
        /// <param name="novoTipoEquipamento">objeto que irá receber as novas insformações</param>
        void Cadastro(TipoEquipamento novoTipoEquipamento);

        /// <summary>
        /// método utilizado para deletar determinado tipo de equipamento, passando o id pelo link da requisição 
        /// </summary>
        /// <param name="id">id do tipo de equipamento que será excluido</param>
        void Deletar(int id);

        void Atualizar(int id, TipoEquipamento novoTipoEquipamento);

    }
}
