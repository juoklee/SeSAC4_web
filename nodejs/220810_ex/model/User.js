const User = (Sequelize, DataTypes) => {

    const model = Sequelize.define(
        // 모델 이름
        'user',
        // 컬럼 정의
        {
            id: {
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            phoneNumber: {
                type: DataTypes.STRING(15),
            },
            password: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        },
        //모델의 옵션
        {
            timestamps: false,
            tableName: 'user',
            freezeTableName: true,
        }
    );

    return model;
}

module.exports = User;