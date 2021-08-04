using System;
using System.Collections.Generic;

#nullable disable

namespace Escola.WebAPI.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamentos { get; set; }
        public int IdTipoEquip { get; set; }
        public int IdSala { get; set; }
        public string Marca { get; set; }
        public int NumeroSerie { get; set; }
        public string Descricao { get; set; }
        public int NumeroPatrimonio { get; set; }
        public bool StatusEquipa { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
        public virtual TipoEquipamento IdTipoEquipNavigation { get; set; }
    }
}
