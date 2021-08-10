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
    public class SalaController : ControllerBase
    {
        private ISalaRepository sala { get; set; }

        public SalaController()
        {
            sala = new SalaRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(sala.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Sala novaSala)
        {
            try
            {
                sala.Cadastro(novaSala);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Sala novaSala)
        {
            try
            {
                sala.Atualizar(id, novaSala);
                return StatusCode(204);
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
                sala.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
