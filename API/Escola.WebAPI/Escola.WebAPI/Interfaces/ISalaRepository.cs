using Escola.WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.WebAPI.Interfaces
{
    interface ISalaRepository
    {
        /// <summary>
        /// método para listagem de todas as salas
        /// </summary>
        /// <returns>lista de salas</returns>
        List<Sala> Listar();

        /// <summary>
        /// método para cadastrar salas
        /// </summary>
        /// <param name="novaSala">objeto que irá receber as novas informações de </param>
        void Cadastro(Sala novaSala);

        /// <summary>
        /// método de deletar as salas
        /// </summary>
        /// <param name="id">id da sala que será deletada</param>
        void Deletar(int id);

        /// <summary>
        /// método utilizado para atualizar a sala
        /// </summary>
        /// <param name="id">id da sala que será atualizada</param>
        /// <param name="novaSala">objeto que urá guardar as novas informações da sala</param>
        void Atualizar(int id, Sala novaSala);

    }
}
