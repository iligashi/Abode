using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
//using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
//using Persistance;

namespace Application.Allergies
{
    public class List
    {
        public class Query : IRequest<List<Property>> { }
        public class Handler : IRequestHandler<Query, List<Property>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Property>> Handle(Query request, CancellationToken cancellationToken)
            {
                var allergies = await this._context.Property.ToListAsync();

                return allergies;
            }
        }
    }
}