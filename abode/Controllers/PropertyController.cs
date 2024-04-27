using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Application.Property;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Mysqlx.Crud;

namespace abode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IMediator mediator;

        public PropertyController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]

        public async Task<ActionResult<List<Property>>> List()
        {
            return await this.mediator.Send(new List.Query());
        }

        [HttpPost]

        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {

            return await mediator.Send(command);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        {
            command.propertyId = id;
            return await mediator.Send(command);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {

            return await mediator.Send(new Delete.Command { Id = id });
        }
    }
}