const Visitor = (Sequelize, DataTypes ) => {
    // Sequelize는 model/index.js에서의 sequelize (DB)
    // DataTypes는 model/index.js에서의 Sequelize

    const model = Sequelize.define(
        // 모델의 이름
        'visitor',
        // 컬럼 정의
        {
            id: {
                //UNSIGNED: 0을 제외한 양의 정수
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT('medium'),
            }
        },
        // 모델의 옵션
        {
            timestamps: false, // true로 지정하면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            tableName: 'visitor',
            freezeTableName: true,
        }
    );
    return model;
}


module.exports = Visitor;