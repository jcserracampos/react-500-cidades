import React, { useState } from 'react';
import { FaCamera, FaPen, FaSave } from "react-icons/fa";
import { phoneMask, cepMask } from "../../components/Masks";
//import { Link } from 'react-router-dom';
// import gql from 'graphql-tag'
//import { gql } from 'apollo-boost';
// import { useQuery } from 'react-apollo'
import * as options from '../../register-options.json'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'
import './styles.css';

// const REGISTER_USER = gql`
//     mutation user?? (
//      $name: String
//      ) { }

//      {tipology, name, job, profile_image, cover_image, biography, skills, email, phone, instagram, facebook,
//      site_address, birth_date, gender, sexual_orientation, race}

const Register = () => {
    // const {loading, data: {putUser: user} } = useQuery(PUT_USER_QUERY) 
    const [edit, setEdit] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: 'Seu nome',
        job: 'Profissão',
        profile_image: '',
        cover_image: '',
        biography: '',
        skills: [],
        email: '',
        phone: '',
        instagram: 'www.instagram.com/',
        facebook: 'www.facebook.com/',
        site_address: '',
        birth_date: '',
        gender: '',
        sexual_orientation: '',
        race: '',
    })
    const [addressInfo, setAddressInfo] = useState({
        street: '',
        number: '',
        complement: '',
        district: '',
        district2: '',
        city: '',
        zipcode: '',
        state: '',
        country: '',
        place_id: '',//google
        geometry: '',//google
        latitude: '',//google
        longitude: ''//google
    })
    const onChangeUserInfo = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }
    const onChangeAddressInfo = (e) => {
        setAddressInfo({...addressInfo, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo)
        console.log(addressInfo)
    }

    return (
      <div className="register-container">
        {/* component menu */}
        <section className="register-cover">
          <div className="cover-photo">
            <FaCamera size={28} color="#888" />
          </div>
          <div className="add-photo">
            <FaCamera size={28} color="#888" />
          </div>
          <div className="register-text">
            <div className="register-edit-text">
            {edit
              ? (
                <>
                <div className="add-name">
                  <Input
                    name="name"
                    value={userInfo.name}
                    onChange={onChangeUserInfo}
                    type="text"
                    inputClass="name-input"
                    autofocus={true}
                    maxlength="33"
                    style={{"width": userInfo.name.length +'ch'}}
                  />
                </div>
                <icon onClick={() => setEdit(false)}>
                  <FaSave size={20} color="#888" />
                </icon>
                </>
              ) : (
                <>
                <h1 className="add-name">{userInfo.name}</h1>
                <icon onClick={() => setEdit(true)}>
                  <FaPen size={20} color="#888" />
                  </icon>
                </>
              )}
            </div>  
            <Select
                options={options.job}
                name="job"
                value={userInfo.job}
                onChange={onChangeUserInfo}
                selectClass="job-select"
                optionClass="job-option"
                style={{"width": (userInfo.job.length + 1) +'ch'}}
              />
          </div>
        </section>
        <form className="register-form">
          <div>
            <h3 className="heading-terciary">Escreva uma biografia</h3>
            <textarea
              name="biography"
              placeholder="Digite aqui sua biografia"
              maxLength="300"
              value={userInfo.biography}
              onChange={onChangeUserInfo}
            ></textarea>
          </div>
          <div>
            <h3 className="heading-terciary">Qual a sua área de atuação?</h3>
            <Input
              name="skills"
              value={userInfo.skills}
              onChange={onChangeUserInfo}
              type="text"
              inputClass="register-input"
              labelClass="register-label"
              labelName="Adicione suas tags"
            />
          </div>
          <div>
            <h3 className="heading-terciary">Adicionar informações pessoais</h3>
            <div className="add-details">
              <Input
                name="email"
                value={userInfo.email}
                onChange={onChangeUserInfo}
                type="email"
                placeholder="seuemail@exemplo.com"
                inputClass="register-input"
                labelClass="register-label"
                labelName="E-mail"
              />
              <Input
                name="phone"
                value={phoneMask(userInfo.phone)}
                onChange={onChangeUserInfo}
                type="tel"
                placeholder="(00) 0000-0000"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Telefone"
              />
              <Input
                name="instagram"
                value={userInfo.instagram}
                onChange={onChangeUserInfo}
                type="url"
                placeholder="instagram.com/seu_@aqui:)"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Instagram"
              />
              <Input
                name="facebook"
                value={userInfo.facebook}
                onChange={onChangeUserInfo}
                placeholder="facebook.com/seu_@aqui:)"
                type="url"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Facebook"
              />
              <Input
                name="site_address"
                value={userInfo.site_address}
                onChange={onChangeUserInfo}
                type="url"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Site/portifolio"
              />
              <Input
                name="birth_date"
                value={userInfo.birth_date}
                onChange={onChangeUserInfo}
                type="date"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Data de nascimento"
              />
              <Select
                options={options.gender}
                name="gender"
                value={userInfo.gender}
                onChange={onChangeUserInfo}
                selectClass="register-select"
                optionClass="register-option"
                labelClass="register-label"
                labelName="Gênero"
              />

              <Select
                options={options.sexual_orientation}
                name="sexual_orientation"
                value={userInfo.sexual_orientation}
                onChange={onChangeUserInfo}
                selectClass="register-select"
                optionClass="register-option"
                labelClass="register-label"
                labelName="Orientação Sexual"
              />
              <Select
                options={options.race}
                name="race"
                value={userInfo.race}
                onChange={onChangeUserInfo}
                selectClass="register-select"
                optionClass="register-option"
                labelClass="register-label"
                labelName="Raça/cor"
              />
              <Input
                name="street"
                value={addressInfo.street}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Rua"
              />
              <Input
                name="number"
                value={addressInfo.number}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Número"
              />
              <Input
                name="complement"
                value={addressInfo.complement}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Complemento"
              />
              <Input
                name="zipcode"
                placeholder="0000-000"
                value={cepMask(addressInfo.zipcode)}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="CEP"
              />
              <Input
                name="district"
                value={addressInfo.district}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Bairro"
              />
              <Input
                name="district2"
                value={addressInfo.district2}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Município"
              />
              <Input
                name="city"
                value={addressInfo.city}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Cidade"
              />
              <Input
                name="state"
                value={addressInfo.state}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Estado"
              />
              <Input
                name="country"
                value={addressInfo.country}
                onChange={onChangeAddressInfo}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="País"
              />
            </div>
          </div>
          <div className="register-submit">
            <Button
              type="submit"
              children="Criar conta"
              className="btn3D--blue"
              onClick={(e) => onSubmit(e)}
            />
            <Button children="Cancelar" className="btn3D--transparent" />
          </div>
        </form>
      </div>
    );
}

export default Register;