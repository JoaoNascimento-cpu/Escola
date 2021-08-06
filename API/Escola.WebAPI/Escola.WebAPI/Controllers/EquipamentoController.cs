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
    public class EquipamentoController : ControllerBase
    {
        private IEquipamentoRepository equipamento { get; set; }

        public EquipamentoController()
        {
            equipamento = new EquipamentoRepository();
        }

        [HttpGet("ListarTudo")]
        public IActionResult ListarTudo() 
        {
            try
            {
                return Ok(equipamento.ListarTudo());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Equipamento novoEquipamento) 
        {
            try
            {
                equipamento.Cadastro(novoEquipamento);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id) 
        {
            try
            {
                equipamento.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Equipamento novoEquipamento)
        {
            try
            {
                equipamento.Atualizar(id, novoEquipamento);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
