using System;
using System.Collections.Generic;

#nullable disable

namespace Escola.WebAPI.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdSala { get; set; }
        public int Andar { get; set; }
        public string Nome { get; set; }
        public double MetragemSala { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
