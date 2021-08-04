using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Escola.WebAPI.Domains
{
    public partial class Usuario
    {

        public string Email { get; set; }
        [Required(ErrorMessage = "É nescessário uma senha para pode rentrar no sistema")]
        [StringLength(10, ErrorMessage = "O limite máximo de caracteres é 10")]
        public string Senha { get; set; }
    }
}
