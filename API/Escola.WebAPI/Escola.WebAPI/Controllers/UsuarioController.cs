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
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuario { get; set; }

        public UsuarioController()
        {
            usuario = new UsuarioRepository();
        }

        [HttpGet]
        //http://5000/api/usuario
        public IActionResult Listar()
        {
            try
            {
                return Ok(usuario.Listar());
            }
            catch (Exception exception)
            {

                return BadRequest(exception);
            }
        }
        
        [HttpPost]
        public IActionResult Cadastro(Usuario novoUsuario)
        {
            try
            {
                usuario.Cadastro(novoUsuario);
                return StatusCode(201);
            }
            catch (Exception exception)
            {

                return BadRequest(exception);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                usuario.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception exception)
            {

                return BadRequest(exception);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Usuario novoUsuario)
        {
            try
            {
                usuario.AtualizarUsuario(id, novoUsuario);
                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
