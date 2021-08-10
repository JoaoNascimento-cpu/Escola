using Escola.WebAPI.Domains;
using Escola.WebAPI.Interfaces;
using Escola.WebAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Escola.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TipoEquipamentoController : ControllerBase
    {
        private ITipoEquipamentoRepository tipoEquipamento { get; set; }

        public TipoEquipamentoController()
        {
            tipoEquipamento = new TipoEquipamentoRepository();
        }

        /// <summary>
        /// método utilizado 
        /// </summary>
        /// <returns>status code 200 - OK</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(tipoEquipamento.Listar());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// método utilizado para o cadastro de novos tipos de equipamento
        /// </summary>
        /// <param name="novoTipoEquipamento">objeto que carrega novas informções que serão passadas pelo corpo da requisição</param>
        /// <returns>status code 201 - created</returns>
        [HttpPost]
        public IActionResult Cadastrar(TipoEquipamento novoTipoEquipamento)
        {
            try
            {
                tipoEquipamento.Cadastro(novoTipoEquipamento);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// método para deletar tipo de equioamento
        /// </summary>
        /// <param name="id">objeto que irá passar as informações pelo </param>
        /// <returns>status code 204- no content</returns>
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                tipoEquipamento.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// método utilizado para atualizar informação do 
        /// </summary>
        /// <param name="id">id do tipo de equipamento que será atualizado passando pelo link da requisição</param>
        /// <param name="novoTipoEquipamento">novas informações que serão inseridas</param>
        /// <returns>status code 204 - no content</returns>
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, TipoEquipamento novoTipoEquipamento)
        {
            try
            {
                tipoEquipamento.Atualizar(id, novoTipoEquipamento);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
