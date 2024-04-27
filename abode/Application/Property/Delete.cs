using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Org.BouncyCastle.Asn1.Ocsp;
using Persistance;

namespace Application.Allergies
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var property = await context.Property.FindAsync(request.Id);

                if (property == null)
                {
                    throw new Exception("Couldnt find property");
                }

                context.Remove(property);

                var success = await this.context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}