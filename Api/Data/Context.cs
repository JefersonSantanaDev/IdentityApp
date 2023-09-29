using Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{ 
    public class context : IdentityDbContext<User>
    {
        public context(DbContextOptions<context> options) :base(options) 
        {
            
        }

        public static object User { get; internal set; }
    }
}
