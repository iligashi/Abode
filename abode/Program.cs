using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using YourNamespace.ApplicationDbContext;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;



var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;


builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();

// ---------------------------------------------------------
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});
builder.Services.AddControllersWithViews()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
    });

builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = configuration["Jwt:Issuer"] ?? "AbodeIssuer", 
        ValidAudience = configuration["Jwt:Audience"] ?? "AbodeAudience", 
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"] ?? "Abode")) 
    };
});

builder.Services.AddDbContext<UserDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<PropertyDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddDbContext<CommercialListingDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

    builder.Services.AddDbContext<LandListingDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<PropertyRentDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<PropertySaleDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<PropertyHousesDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<MessagingDbContext>(options =>
        options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<ContactDbContext>(options =>
       options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddDbContext<VacationRentalDbContext>(options =>
    options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<UserRegistrationDbContext>(options =>
    options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<UserAccountDbContext>(options =>
    options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Working with SQLLite In Asp.net Core Web API", Version = "v1" });

});

var app = builder.Build();

// Configure the HTTP request pipeline.
if(app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Add CORS middleware to the pipeline
app.UseCors("AllowAnyOrigin");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
