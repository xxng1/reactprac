//UserRepository.java

package gcu.backend.axiosex;
import org.springframework.data.jpa.repository.JpaRepository;
@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> { }