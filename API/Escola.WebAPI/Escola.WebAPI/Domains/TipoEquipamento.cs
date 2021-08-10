using System;
using System.Collections.Generic;

#nullable disable

namespace Escola.WebAPI.Domains
{
    public partial class TipoEquipamento
    {
        public TipoEquipamento()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdTipoEquip { get; set; }
        public string TipoEquip { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
