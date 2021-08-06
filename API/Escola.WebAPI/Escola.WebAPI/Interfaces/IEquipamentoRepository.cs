using Escola.WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.WebAPI.Interfaces
{
    interface IEquipamentoRepository
    {
        /// <summary>
        /// método utilizado para a listagem de equipamentos
        /// </summary>
        /// <returns>retorna uma lista de equipamentos</returns>
        List<Equipamento> ListarTudo();

        /// <summary>
        /// método para cadastro de equipamento
        /// </summary>
        /// <param name="novoEquipamento">objeto que irá receber as novas informações que serão passadas pelo corpo da requisição</param>
        void Cadastro(Equipamento novoEquipamento);

        /// <summary>
        /// método para deletar os equipamentos
        /// </summary>
        /// <param name="id">id do equipamento que será deletado</param>
        void Deletar(int id);

        /// <summary>
        /// método para atualizar um equipamento
        /// </summary>
        /// <param name="id">id do equipamento que será atualizado</param>
        /// <param name="novoEquipamento">objeto que irá armazenar as novas informações passando pelo corpo da requisição</param>
        void Atualizar(int id, Equipamento novoEquipamento);

        void Situacao(bool id, string status);
    }
}
