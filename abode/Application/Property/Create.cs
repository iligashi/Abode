using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain;
using MediatR;
using Org.BouncyCastle.Asn1.Ocsp;
//using Persistance;

namespace Application.Allergies
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Name { get; set; }
            public string Reason { get; set; }
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
                var property = new Property
                {
                    Name = request.Name,
                    Reason = request.Reason
                };

                context.Property.Add(property);
                var success = await context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;
                throw new System.Exception("Problem saving changes");
            }


        }
    }
}