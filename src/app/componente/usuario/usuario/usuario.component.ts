import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<User[]>;
  nome: String;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuariosList().subscribe(data => {
      this.usuarios = data;
    })
  }

  deletarUsuario(id: Number) {
    this.usuarioService.deletarUusario(id).subscribe(data => {
      console.log("Retorno do método delete : " + data);
      this.usuarioService.getUsuariosList().subscribe(data => {
        this.usuarios = data;
      })
    });
  }

  consultarUserNome() {
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.usuarios = data;
    });
  }

}
