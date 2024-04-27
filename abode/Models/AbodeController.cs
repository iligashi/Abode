using abode.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace abode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AbodeController : ControllerBase
    {


        private readonly AbodeContext _dbContext;


        public AbodeController(AbodeContext dbContext )
        {
            _dbContext = dbContext;
        }
    }
}
